export const TitleCloseNumber = ({text}: { text: string}): JSX.Element => {
    return <div>
        <h1 className={"ml-0 text-start text-4xl ml-2 -my-5 text-red-700"}>
            {text}
        </h1>
    </div>
}