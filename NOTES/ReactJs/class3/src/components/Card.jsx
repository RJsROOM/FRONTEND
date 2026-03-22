

const Card = (props) => {

  return (
    <div className='bg-emerald-600 m-5 rounded-lg px-5 py-4 w-fit'>
      <h1 className='text-2xl font-semibold'>
        {/* {user} */}
        {props.user}
      </h1>
    </div>
  )
}

export default Card