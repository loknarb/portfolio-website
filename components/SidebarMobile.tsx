import ResumeLink from './ResumeLink';
import { SetBooleanValue, UseBooleanValue } from './types/types';
import ArrowRight from './UI/ArrowRight';
import PrimaryButton from './UI/PrimaryButton';
import ThemeToggle from './ThemeToggle';

const SidebarMobile: React.FC<{ sideBar: UseBooleanValue; setSidebar: SetBooleanValue }> = ({
  sideBar,
  setSidebar,
}) => {
  return (
    <>
      <div
        className={`fixed w-full bg-gradient-to-br from-yellow-200 via-pink-300 to-green-300 z-30 cursor-pointer inset-0 ${
          sideBar ? 'opacity-0 w-0 h-0' : 'opacity-[0.05] w-full '
        }`}
        onClick={() => setSidebar(true)}></div>
      <aside
        className={`py-4 px-10 top-0 right-0 h-42 w-54 z-40 flex-col flex fixed bg-transparent  shadow-sm  transistion-transform ease-in-out -translate-x-64 w-55 duration-300 rounded-bl  ${
          sideBar ? 'translate-x-64' : 'translate-x-0'
        }`}>
        <div className='self-end'>
          <PrimaryButton className={`my-2`} onClick={() => setSidebar(true)}>
            <ArrowRight />
          </PrimaryButton>
        </div>
        <div className='flex flex-col items-center gap-2 p-4 bg-opacity-100 rounded bg-zinc-50 dark:bg-zinc-900'>
          <ResumeLink button />
          <a
            className='flex flex-col px-2 py-2 transition-all duration-500 bg-transparent rounded border-zinc-600 border-opacity-20 hover:scale-105 hover:shadow-md shadow-zinc-200'
            href='https://www.recipes.s-brum.com'>
            Recipes
          </a>
          <div className='mt-2'>
            <ThemeToggle />
          </div>
        </div>
      </aside>
    </>
  );
};

export default SidebarMobile;
