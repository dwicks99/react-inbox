import React from 'react';
import { Toolbar } from '../components/Toolbar';
import { shallow } from 'enzyme'

describe('Toolbar', () => {

    const shallowToolbar = (overrides) => {
        const defaultProps = {
            list: [
                {
                    subject: 'Hello World',
                    read: false,
                    selected: false,
                    labels: [],
                    starred: false
                },
                {
                    subject: 'Goodbye World',
                    read: false,
                    selected: false,
                    labels: [],
                    starred: false
                }
            ],
            selectAll: jest.fn(),
            selectSome: jest.fn()
        }

        const props = Object.assign({}, defaultProps, overrides)
        return shallow(<Toolbar {...props} />)
    }

    describe('Rendering', () => {

        it('renders without crashing', () => {
            const t = shallowToolbar()

            expect(t.find('div.row.toolbar')).toHaveLength(1)
            expect(t.find('i.fa.fa-square-o')).toHaveLength(1)
        });
    })

    describe('behavior', () => {
        it('when empty checkbox is clicked, calls selectall callback', () => {
            const t = shallowToolbar()

            let checkbox = t.find('i.fa.fa-square-o');
            checkbox.simulate('click')

            expect(t.instance().props.selectAll).toHaveBeenCalledTimes(1)
        })

        it('when select all box is clicked and some are checked then check all', () => {
            const t = shallowToolbar({
                list: [
                    {
                        subject: 'Hello World',
                        read: false,
                        selected: true,
                        labels: [],
                        starred: false
                    },
                    {
                        subject: 'Goodbye World',
                        read: false,
                        selected: false,
                        labels: [],
                        starred: false
                    }
                ]
            })

            let checkbox = t.find('i.fa.fa-minus-square-o');
            checkbox.simulate('click')

            expect(t.instance().props.selectSome).toHaveBeenCalledTimes(1)
        })
    })
})

