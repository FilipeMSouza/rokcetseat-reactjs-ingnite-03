import { signIn, useSession, signOut } from "next-auth/react"
import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

import styles from './styles.module.scss'

export function SingInButton() {
  const {data:session} = useSession();
  
  console.log(session)
  return session ? (

    <button
      className={styles.SingInButton}
      
    >
      <FaGithub color='#04d361' />
        {session.user.name}
      <button
       className={styles.SingOutButton}
      type="button"
      onClick={() => signOut()}>
      <FiX 
      color='#737380' 
      className={styles.closeIcon}
      />
      </button>
    </button>

  ) : (

    <button 
      className={styles.SingInButton}
      type="button"
      onClick={() => signIn("github")}
      >
      <FaGithub color='#EBA417'/>
      Sing In With GitHub
    </button>

  )
}