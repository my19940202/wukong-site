// 博客页面先简单渲染一个布局
export default function Blog() {
    return <div className="max-w-[1280px] mx-auto py-2">
        <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
            <img src="https://via.placeholder.com/800x400" alt="Blog Image" className="w-full h-64 object-cover" />
            <div className="p-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">Blog Title</h1>
                <p className="text-gray-700 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula justo non orci cursus, nec malesuada felis luctus. Nullam pharetra arcu vel metus laoreet, a tincidunt lorem faucibus. Fusce ut nisi ut arcu fermentum accumsan.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                </p>
            </div>
        </div>
    </div>;
}
