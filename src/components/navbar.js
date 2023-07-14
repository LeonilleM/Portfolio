function navbar() {
  return (
    <div>
      <div className="flex flex-wrap items-center justify-between py-5 mx-12">
        <h1 className="text-3xl font-bold text-primary">Leonille Matunan</h1>
        <div>
          <ul className="flex flex-wrap justify-between items-center space-x-5">
            <li>
              <a href="#" className="text-lg font-medium text-dark">About</a>
            </li>
            <li>
              <a href="#" className="text-lg font-medium text-dark">Projects</a>
            </li>
            <li>
              <a href="#" className="text-lg font-medium text-dark">Resume</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default navbar