import { Helmet } from 'react-helmet';

export default function Home() {

    const categories = [
        ['react', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'],
        ['next', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg'],
        ['api', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg'],
        ['pypi', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'],
        ['other', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/packer/packer-original.svg']
    ]

    return (
        <>
            <Helmet>
                <title>Hasindu | Project</title>
                <meta name="description" content="Hasindu Sithmin's projects" />
            </Helmet>

            <div className='w3-content w3-section'>

                <h1 className='w3-center'>
                    Hasindu Sithmin's Projects
                </h1>

                {
                    categories.map(category => (
                        <a key={category[0]} href={category[0]} className="w3-padding">
                            <img src={category[1]} alt={category[0]} width="200" height="200" />
                        </a>
                    ))
                }
            </div>

        </>
    )
}