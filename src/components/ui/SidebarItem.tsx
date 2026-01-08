import { type ReactElement } from 'react'


const SidebarItem = ({ text, icon }: { text: string; icon: ReactElement }) => {
  return (
          <div className="flex items-center gap-3 hover:text-white cursor-pointer">
            {icon} {text}
          </div>
  );
};
 
export default SidebarItem