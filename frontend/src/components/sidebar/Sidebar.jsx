import SearchInput from "./SearchInput";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";

function Sidebar() {
  return (
    // <div className="border border-slate-500 p-4 flex flex-col">
    //   <SearchInput />
    //   <div className="divider px-3"></div>
    //
    //
    // </div>
    <div className="drawer lg:drawer-open w-[unset]">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side ">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content bg-accent">
          {/* Sidebar content here */}
          <Conversations />
          <LogoutButton />
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
