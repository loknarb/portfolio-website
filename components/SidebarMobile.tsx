import { SetBooleanValue, UseBooleanValue } from './types/types';
import ArrowRight from './UI/ArrowRight';
import PrimaryButton from './UI/PrimaryButton';

const SidebarMobile: React.FC<{ sideBar: UseBooleanValue; setSidebar: SetBooleanValue }> = ({
  sideBar,
  setSidebar,
}) => {
  return (
    <>
      <div
        className={`fixed w-full bg-zinc-900 bg-opacity-50 z-30 cursor-pointer inset-0 ${
          sideBar ? 'opacity-0 w-0 h-0' : 'opacity-100 w-full '
        }`}
        onClick={() => setSidebar(true)}></div>
      <aside
        className={`p-4 top-0 right-0 h-42 w-32 z-40 flex-col flex fixed bg-transparent  shadow-sm  transistion-transform ease-in-out -translate-x-64 w-55 duration-300 rounded-bl  ${
          sideBar ? 'translate-x-64' : 'translate-x-0'
        }`}>
        <div className='self-end'>
          <PrimaryButton className={`my-2`} onClick={() => setSidebar(true)}>
            <ArrowRight />
          </PrimaryButton>
        </div>
        <div className='p-4 rounded bg-zinc-800 bg-opacity-80'>Resume Link Will Go Here</div>
      </aside>
    </>
  );
};

export default SidebarMobile;
