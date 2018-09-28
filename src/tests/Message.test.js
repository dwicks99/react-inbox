import React from 'react';
import { Message } from '../components/Message';
import { shallow } from 'enzyme'

describe('Message', () => {

  const shallowMessage = (overrides) => {
    const defaultProps = {
      subject: 'Hello World',
      read: false,
      selected: false,
      labels: [],
      starred: false
    }

    const props = Object.assign({}, defaultProps, overrides)

    const starSpy = jest.fn()
    return shallow(<Message message={props} toggleStar={starSpy} toggleSelected={jest.fn()} />)
  }

  describe('Rendering', () => {

    it('renders without crashing', () => {
      const subject = "Assert Test"
      const m = shallowMessage({ subject: subject })

      expect(m.find('div.message')).toHaveLength(1)
      expect(m.find('div.message').text()).toEqual(subject)
      expect(m.find('input[type="checkbox"]')).toHaveLength(1)
      expect(m.find('i.star.fa.fa-star-o')).toHaveLength(1)
    });

    it('message renders with read style', () => {
      const m = shallowMessage({ read: true })

      expect(m.find('div.message.read')).toHaveLength(1)
    });

    it('message renders with unread style', () => {
      const m = shallowMessage()

      expect(m.find('div.message.unread')).toHaveLength(1)
    });

    it('if message is selected should have style and checked box', () => {

      const m = shallowMessage({ selected: true })

      expect(m.find('div.message.selected')).toHaveLength(1)
      let checkbox = m.find({ type: 'checkbox' });
      expect(checkbox.props().checked).toBeTruthy();
    });

    it('if message has labels, should render labels', () => {

      const expectedLabels = ['simple', 'overdone']
      const m = shallowMessage({ labels: expectedLabels })

      expect(m.find('span.label.label-warning')).toHaveLength(expectedLabels.length)
    });


    it('if message is starred should have filled in star', () => {

      const m = shallowMessage({ starred: true })

      expect(m.find('i.star.fa.fa-star')).toHaveLength(1)
    });
  })

  describe('behavior', () => {
    it('toggles star power', () => {
      //setup
      const m = shallowMessage()
      expect(m.find('i.star.fa.fa-star')).toHaveLength(0)
      expect(m.find('i.star.fa.fa-star-o')).toHaveLength(1)

      //exercise
      m.find('i.star.fa.fa-star-o').simulate('click')

      //assert
      expect(m.instance().props.toggleStar).toHaveBeenCalledTimes(1)
    })

    it('toggles box checking', () => {

      const m = shallowMessage({ selected: true })

      let checkbox = m.find({ type: 'checkbox' });
      checkbox.simulate('click')

      expect(m.instance().props.toggleSelected).toHaveBeenCalledTimes(1)

    })
  })
})
