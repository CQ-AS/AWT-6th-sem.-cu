
export default function Lazy(){
   
    return(
        <>
        <h1>Lazy Loading component</h1>
        <p>Lazy loading is achieved using two built-in React features: lazy() and Suspense.
            
            lazy(): Wraps a dynamic import() to define a component that loads on demand. 
            Note that the component being loaded must be a default export.Suspense: 
            Wraps the lazy component and provides a fallback UI (like a loading spinner) to display while the component's code is being fetched.</p>
        
        </>
    )

}