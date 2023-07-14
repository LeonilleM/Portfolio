
function footer() {
  return (
    <footer className ="pb-4">
      <div className="flex flex-col items-center">
        <hr className="w-1/2 border-secondary"/>
        <div className="py-2">
          <h1 className="text-primary text-xl">@ 2023 Leonille Matunan</h1>
        </div>
        <div>
          <ul className="flex flex-wrap space-x-5 text-primary">
            <li>
              <a href="#"> Resume</a>
            </li>
            <li>
              <a href="#"> Email</a>
            </li>
            <li>
              <a href="#"> LinkedIn</a>
            </li>
            <li>
              <a href="#"> GitHub</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default footer