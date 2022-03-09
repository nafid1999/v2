import dynamic from 'next/dynamic'

function NoSsr(props) {
  return props.children
}

export default dynamic(() => Promise.resolve(NoSsr), {
  ssr: false,
})
