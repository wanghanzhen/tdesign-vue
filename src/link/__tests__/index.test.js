import { mount } from '@vue/test-utils';
import Link from '@/src/link/index.ts';

// every component needs four parts: props/events/slots/functions.
describe('Link', () => {
  // test props api
  describe(':props', () => {
    it(':size', () => {
      const wrapper = mount({
        render() {
          return <Link size={'large'}>text</Link>;
        },
      });
      expect(wrapper).toMatchSnapshot();
    });
    it(':theme', () => {
      const wrapper = mount({
        render() {
          return <Link theme={'primary'}>text</Link>;
        },
      });
      expect(wrapper).toMatchSnapshot();
    });
    it(':hover', () => {
      const wrapper = mount({
        render() {
          return <Link hover={'color'}>text</Link>;
        },
      });
      expect(wrapper).toMatchSnapshot();
    });
    it(':underline', () => {
      const wrapper = mount({
        render() {
          return <Link underline={true}>text</Link>;
        },
      });
      expect(wrapper).toMatchSnapshot();
    });
    it(':disabled', () => {
      const fn = jest.fn();
      const wrapper = mount({
        render() {
          return (
            <Link disabled={true} onClick={fn}>
              text
            </Link>
          );
        },
      });
      wrapper.trigger('click');
      expect(fn).not.toHaveBeenCalled();
      expect(wrapper).toMatchSnapshot();
    });
    it(':content', () => {
      const renderContent = function () {
        return 'foo';
      };
      const wrapper = mount({
        render() {
          return (
            <div>
              <Link content="foo">bar</Link>
              <Link content={renderContent}>bar</Link>
              <Link default="foo">bar</Link>
              <Link default={renderContent}>bar</Link>
              <Link content={'0'}>bar</Link>
            </div>
          );
        },
      });
      expect(wrapper).toMatchSnapshot();
    });
  });

  // test events
  describe('@event', () => {
    it('Event passthrough ', () => {
      const fn = jest.fn();
      const wrapper = mount({
        render() {
          return <Link onClick={fn}>text</Link>;
        },
      });
      wrapper.findComponent(Link).trigger('click');
      expect(fn).toHaveBeenCalled();
    });
  });

  // test slots
  describe('<slot>', () => {
    it('<icon>', () => {
      const wrapper = mount(Link, {
        scopedSlots: {
          icon: '<div></div>',
        },
      });
      expect(wrapper).toMatchSnapshot();
    });
  });
});
