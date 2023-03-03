import book from '../assets/book.jpg';

const files = [
    {
      title: 'Parents',
      source:
        '/src/assets/book.jpg',
        color: "bg-orange"
    },
    {
      title: 'Curriculum',
      source:
      '/src/assets/child.jpg',
        color: "bg-primary"
    },
    {
      title: 'Sports',
      source:
      '/src/assets/rugby.jpg',
        color: "bg-pink"
    },
    {
      title: 'Uniforms',
      source:
      '/src/assets/classroom.jpg',
        color: "bg-pea"
    },
    {
      title: 'Staff',
      source:
      '/src/assets/ducks.jpg',
        color: "bg-secondary"
    },
    {
      title: 'PE',
      source:
      '/src/assets/sports.jpg',
        color: "bg-sky"
    },
    {
      title: 'Piano',
      source:
      '/src/assets/piano.jpg',
        color: "bg-yellow"
    },
    {
      title: 'Rugby',
      source:
      '/src/assets/uniform.jpg',
        color: "bg-purple"
    },
    // More files...
  ]

  export default function Example() {
    return (
      <ul role="list" className="grid gap-1 py-1 bg-white sm:grid-cols-2 lg:grid-cols-4">
        {files.map((file, idx) => (
          <li key={file.title} className="relative">
            <a href="#" className="group flex md:flex-col justify-items-stretch items-center md:max-h-80">
                <div className={`group basis-1/4 relative p-2 md:p-0 block w-full overflow-hidden bg-gray-100 ${file.color}`}>
                  <img src={file.source} alt="" className="pointer-events-none rounded-lg md:rounded-none object-cover w-full aspect-square group-hover:opacity-75" />
                  <button type="button" className="absolute inset-0 focus:outline-none">
                      <span className="sr-only">View details for {file.title}</span>
                  </button>
                </div>
                <div className={`${file.color} group-hover:tracking-widest flex-grow sm:flex-auto md:py-4 px-2 flex items-center self-stretch`}>
                    <p className={`pointer-events-none py-2 mt-2 block font-medium text-white`}>{file.title}</p>
                </div>
            </a>
          </li>
        ))}
      </ul>
    )
  }