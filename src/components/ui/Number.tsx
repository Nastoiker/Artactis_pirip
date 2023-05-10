export const NumberTourUi = ({numberTour}: { numberTour: number}) => {
    return <div className={"w-fit text-gray-400 text-9xl"}>
        {numberTour<10 && `0${numberTour}`}
    </div>
}