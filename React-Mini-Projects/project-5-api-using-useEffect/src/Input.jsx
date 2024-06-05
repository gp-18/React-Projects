import React from 'react'

const Input = ({getName}) => {
  const [username, setUsername] = React.useState('');
  const handleInput = (e) => {
    e.preventDefault();
    getName(username);
    setUsername('');
  }
  return (
    <>
    <form onSubmit={handleInput}> 
      <input 
      type="text"
       value={username}
       onChange={(e)=>setUsername(e.target.value)}/>
      <input type="submit" value="submit"/>
    </form>
    </>
  )
}

export default Input