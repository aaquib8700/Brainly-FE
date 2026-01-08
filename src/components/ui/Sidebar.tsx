import SidebarItem from './SidebarItem'
import TwitterIcon from '../../icons/TwitterIcon'
import YoutubeIcon from '../../icons/YoutubeIcon'
import BrainIcon from '../../icons/BrainIcon'
import HomeIcon from '../../icons/HomeIcon'

const Sidebar = () => {
  return (
      <aside className="w-64 border-r border-white/10 p-6 hidden md:block">
        <div className="flex items-center gap-2 text-xl font-semibold mb-10">
          <div className="w-10 h-10 rounded-xl bg-purple-600/20 flex items-center justify-center">
            <BrainIcon size='md'/>
          </div>
          Brainly
        </div>
        <p className="text-xs text-gray-500 mb-4">CONTENT TYPES</p>
        <nav className="space-y-3 text-gray-300">
          <SidebarItem text='All Content' icon={<HomeIcon size='sm' />}></SidebarItem>
          <SidebarItem text='Youtube' icon={<YoutubeIcon size='sm' />}></SidebarItem>
          <SidebarItem text='Twitter' icon={<TwitterIcon size='sm' />}></SidebarItem>
        </nav>
      </aside>

  )
}

export default Sidebar