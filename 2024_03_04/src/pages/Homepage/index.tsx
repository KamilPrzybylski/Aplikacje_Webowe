import Heading, {HeadingType} from "../../components/Heading";

function Homepage() {
  return (
    <>
      <div>
        <Heading title='Homepage' level={1} />
      </div>
      <div>
        {[...Array(6)].map((_, index) => (
          <div key={index}>
            <Heading 
              title={`Heading ${index + 1}`}
              level={(index + 1) as HeadingType}
            />
          </div>
        ))}
      </div>
    </>
  )
}

export default Homepage
