export default function preview() {
  return (
    <>
      <img src={`${process.env.BASE_PATH}/preview.png`} alt="preview" />
    </>
  )
}