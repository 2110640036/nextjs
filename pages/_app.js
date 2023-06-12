import '../css/style.css'
import '../css/form.css'
import Head from 'next/head'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Boing App</title>
      </Head>

      <div className="top-bar">
        <div className="nav">
        
          <Link href="/">Home</Link>
          <Link href="/new">Add Pets</Link>
        
         
        
       </div>
        <img
          id="title"
          src="https://upload.wikimedia.org/wikipedia/commons/8/8c/Logo_Boing.png?20210415070453"
          alt="Boing Logo"
        ></img>
      </div>
      <div className="grid wrapper">
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
