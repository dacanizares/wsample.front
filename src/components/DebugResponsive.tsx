export default function DebugResponsive () {
  return (
    <div className="fixed bottom-0 bg-gray-500 text-white z-50">
      <b>DEBUG: </b>
      <span className="hidden sm:inline">sm &nbsp;</span>
      <span className="hidden md:inline">md &nbsp;</span>
      <span className="hidden lg:inline">lg &nbsp;</span>
      <span className="hidden xl:inline">xl &nbsp;</span>
      <span className="hidden 2xl:inline">2xl;</span>
    </div>
  )
}
