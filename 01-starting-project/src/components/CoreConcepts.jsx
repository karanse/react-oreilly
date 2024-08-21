export default function CoreConcept({ image, title, description }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  )
}


// Object deconstructing way of passings props

// export default function CoreConcept({ image, title, description }) {
//     return (
//       <li>
//         <img src={image} alt={title} />
//         <h3>{title}</h3>
//         <p>{description}</p>
//       </li>
//     )
//   }