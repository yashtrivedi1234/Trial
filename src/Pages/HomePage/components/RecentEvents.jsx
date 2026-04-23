import EventImg1 from "../../../assets/Events/cgmz9hjpkhzhqlrx8vpl.webp";
import EventImg2 from "../../../assets/Events/g7vsd2vyqhchf8s9dsvl.jpg";
import EventImg3 from "../../../assets/Events/gggtayjattow7mqrjn5h.jpg";
import EventImg4 from "../../../assets/Events/wpwzfycmeyrpn3vxtwtv.webp";

const events = [
  { date: "27 Feb 2026", title: "Mango Workshop UPCAR", img: EventImg1 },
  { date: "24 Dec 2025", title: "Rista FPC", img: EventImg2 },
  { date: "20 Jan 2026", title: "KVK Hardoi-2", img: EventImg3 },
  { date: "19 Nov 2025", title: "KVK-Sitapur-2", img: EventImg4 },
];

export default function RecentEvents() {
  return (
    <div className="max-w-[1380px] mx-auto px-8 py-8">
      <h2 className="text-2xl font-bold text-center mb-1 text-gray-900">Recent Events</h2>
      <p className="text-center text-gray-500 text-sm mb-6">Join our agricultural workshops, expos and farmer meetups</p>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {events.map((event) => (
          <div key={event.title} className="rounded-xl overflow-hidden relative cursor-pointer group">
            <div className="h-44 overflow-hidden">
              <img src={event.img} alt={event.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
              <span className="absolute top-2 left-2 bg-black/40 text-white text-[10px] px-2 py-0.5 rounded">{event.date}</span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/70 to-transparent p-3">
              <p className="text-white font-semibold text-xs">{event.title}</p>
              <p style={{ color: "#86efac" }} className="text-[11px] mt-0.5">View Details {"->"}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}