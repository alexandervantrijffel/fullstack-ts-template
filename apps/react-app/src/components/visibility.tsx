export default function Visibility(): JSX.Element {
    return (
        <div className="text-[#FF0000] flex px-5 ">
            <div className="sm:visible md:invisible m-auto">sm</div>
            <div className="invisible md:visible lg:invisible m-auto">md</div>
            <div className="invisible lg:visible xl:invisible m-auto">lg</div>
            <div className="invisible xl:visible 2xl:invisible m-auto">xl</div>
            <div className="invisible 2xl:visible m-auto">2xl</div>
        </div>
    );
}
