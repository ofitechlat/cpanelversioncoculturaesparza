{/* New Login Button */}
<button className="hidden md:block">
  <Link
    to="/login"
    className={`hidden md:inline-block px-4 py-2 text-sm font-medium text-white bg-teal-600 rounded-md shadow hover:bg-teal-700 transition-colors ${
      isScrolled ? 'bg-teal-600' : 'bg-transparent'
    }`}
  >
    Login
  </Link>
</button>