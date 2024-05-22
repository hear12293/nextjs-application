export default function NestPage({ children }: { children: React.ReactNode }) {
    return (<>
         <h2>Inner Layout</h2>
        {children}
    </>)
}