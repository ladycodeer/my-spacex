import Image from 'next/image'
import spaceX from '../assets/pics/spaceX.jpeg'

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div
          className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('../assets')" }}
        >
          <h1>Hello Space</h1>
        </div>
      </div>
    </>
  )
}
