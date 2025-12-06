import { useEffect, useState } from 'preact/hooks'

type  Props = {
  msgs: string[]
}

function Greeting({ msgs }: Props) {
  const randomMsg = () =>
    msgs[Math.floor(Math.random() * msgs.length)]

  const [greeting, setGreeting] = useState(msgs[0])

  useEffect(() => {
    console.log("✅ GREETING COMPONENT HAS MOUNTED AND HYDRATED!");
  }, []); // Run once on mount

  const handleBtnClick = () => {
    const newMsg = randomMsg() // Store the new message
    setGreeting(newMsg) // Set the state with the new message
    console.log('NEW GREETING (Value being set):: ', newMsg) // Log the new message
    console.log('OLD GREETING (State before update):: ', greeting) // Log the old state
  }

  return (
    <div>
      <h3>{greeting}! Thank you for visiting!</h3>
      <button
      style={{
        backgroundColor: 'grey',
        border: 'none',
        padding: '0.5rem 1rem',
        borderRadius: '5px',
        cursor: 'pointer'
      }}
      onClick={handleBtnClick}>New Greeting</button>
    </div>
  )
}

export default Greeting
