import Image from 'next/Image'
import Link from 'next/link';

type Card = {
    name: string,
    details: string,
    image: string
}


function PlaceCard ({name, details, image}:Card) {

    return (
        <div className='flex-col justify-center '>
            <div className='w-100% h-96 relative'>
                <Image
                    src={image}
                    alt={name}
                    layout='fill'
                    objectFit='cover'
                />
            </div>
            <div className='flex-col justify-left align-center p-4'>
                <h1 className='my-2 text-2xl font-bold overflow-hidden'>{name}</h1>
                <p>{details.substring(0,100)} ...</p>
                <Link href={`/place/${name}`}>
                    <a className='transition duration-150 ease-out hover:ease-in my-4'>
                        Read more...
                    </a>
                </Link>
            </div>
        </div>
    )
}


export default PlaceCard
