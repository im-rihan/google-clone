function Footer() {
  return (
    <footer className="grid  span-col-1 w-full divide-y-[1px] divide-gray-300 bg-gray-100 text-sm text-gray-500">
      <div className="px-8 py-3 ">
        <p>India</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 px-8 py-3 grid-flow-row-dense ">
        <div className="flex space-x-8 justify-center md:col-span-2 lg:col-span-1 lg:col-start-2">
          <p className="link">How Search works</p>
        </div>
        <div className="flex space-x-8 justify-center md:justify-self-start  whitespace-nowrap">
          <p className="link">About Us</p>
          <p className="link">Advertising</p>
          <p className="link">Business</p>
        </div>
        <div className="flex space-x-8 justify-center md:ml-auto ">
          <p className="link">Privacy</p>
          <p className="link">Terms</p>
          <p className="link">Settings</p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
