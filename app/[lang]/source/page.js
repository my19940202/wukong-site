export default function Source() {
	return (
        <div className="max-w-[1280px] mx-auto py-2">
            <div class="breadcrumbs text-sm">
                <ul>
                    <li><a>Home</a></li>
                    <li><a>character</a></li>
                </ul>
            </div>
            <div className="flex flex-row flex-wrap justify-items-start" >
                <div class="card card-compact bg-base-100 w-96 shadow-xl m-2">
                    <figure>
                        <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                        alt="Shoes" />
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title">孙悟空</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
                <div class="card card-compact bg-base-100 w-96 shadow-xl m-2">
                    <figure>
                        <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                        alt="Shoes" />
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title">蜘蛛精</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
