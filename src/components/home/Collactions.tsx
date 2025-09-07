import { useId } from "react";
import img1 from "../../assets/collections/6.jpg";
import img2 from "../../assets/collections/2.webp";
import img3 from "../../assets/collections/3.webp";
import img4 from "../../assets/collections/4.webp";
import img5 from "../../assets/collections/5.webp";

type CollectionItem = {
    title: string;
    image: string;
};

type CollectionProps = {
    title?: string;
    items?: CollectionItem[];
    className?: string;
};

export const Collection = ({
    title = "Our Collections",
    items = defaultItems,
}: CollectionProps) => {
    const headingId = useId();
    const hasItems = Array.isArray(items) && items.length > 0;

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10" aria-labelledby={headingId}>
            <h2 className="text-4xl font-bold py-4 text-gray-900 mb-4">
                {title}
            </h2>
             
            {!hasItems ? (
                <p className="text-sm text-gray-500">No collections to display.</p>
            ) : (
                <ul
                    className="
                        flex gap-3 overflow-x-auto no-scrollbar
                        snap-x snap-mandatory
                    "
                    aria-label="Collections"
                    role="list"
                >
                    {items.map((item) => (
                        <li key={item.title} className="snap-start">
                            <div
                                className="
                                    relative group shrink-0
                                    w-56 h-36 sm:w-64 sm:h-40
                                    rounded-lg overflow-hidden
                                "
                            >
                                <img
                                    src={item.image}
                                    alt={`${item.title} collection`}
                                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    loading="lazy"
                                    decoding="async"
                                    draggable={false}
                                />
                              {/*opacity-0 group-hover:opacity-100*/}
                                <div 
                                    className="
                                        absolute inset-0
                                        bg-black/50
                                        
                                        transition-opacity duration-300
                                        flex items-center justify-center
                                    "
                                >
                                    <span className="text-white text-sm sm:text-base font-medium">
                                        {item.title}
                                    </span>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
};

const defaultItems: CollectionItem[] = [
    {
        title: "Summer",
        image:
            img1,
    },
    {
        title: "Workspace",
        image:
            img2,
    },
    {
        title: "Home",
        image:
            img3,
    },
    {
        title: "Outdoor",
        image:
            img4,
    },
    {
        title: "Urban",
        image:
            img5,
    },
];