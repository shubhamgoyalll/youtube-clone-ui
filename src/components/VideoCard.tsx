export default function VideoCard(props: any) {
  return (
    <div className="p-4 cursor-pointer mt-2">
      <img src={props.thumbnail} alt="thumbnail" className="rounded-lg"></img>
      <div className="grid grid-cols-12">
        <div className="col-span-1">
          <img className="rounded-full w-8 pt-2" src={props.image}></img>
        </div>
        <div className="col-span-11 font-medium pl-3 pt-2">
          <div>{props.title}</div>
          <div className="font-normal text-gray-300 text-sm">
            {props.author} &#x2713;
          </div>
          <div className="text-gray-300 font-normal text-sm">
            {props.views} . {props.timestamp}{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
