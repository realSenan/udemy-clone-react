import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import {
  BsCheck2,
  BsChevronDown,
  BsChevronUp,
  BsClock,
  BsCollectionPlay,
  BsDownload,
  BsFileEarmarkText,
  BsGlobe2,
  BsInfinity,
  BsPatchCheck,
  BsPlayFill,
  BsPhone,
  BsPlayCircleFill,
  BsTrophy,
  BsX,
} from "react-icons/bs";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { FiGift, FiHeart, FiShare2 } from "react-icons/fi";
import Star from "../Home/Main/ProductFilterSection/Star";
import { addProduct } from "../../redux/shopSlice";
import { addWashList, removeWashList } from "../../redux/wishList";

const learningObjectives = [
  "Build practical, job-ready projects step by step",
  "Understand the core concepts without getting lost in jargon",
  "Apply modern development workflows and best practices",
  "Confidently use the tools used by professional developers",
  "Keep learning with reusable resources and clear next steps",
  "Turn your new skills into a portfolio you can share",
];

const curriculumData = [
  {
    id: "welcome",
    title: "Course introduction and setup",
    lectures: 4,
    duration: "28min",
    items: [
      { title: "Welcome to the course", duration: "04:32", preview: true },
      { title: "How to get the most from this course", duration: "06:18" },
      { title: "Your workspace and course files", duration: "08:41" },
      { title: "Quick start challenge", duration: "09:02" },
    ],
  },
  {
    id: "foundations",
    title: "Foundations you need to know",
    lectures: 7,
    duration: "1hr 18min",
    items: [
      { title: "The essential concepts", duration: "11:20", preview: true },
      { title: "Working through a real example", duration: "14:05" },
      { title: "Common mistakes and how to avoid them", duration: "12:14" },
    ],
  },
  {
    id: "projects",
    title: "Build projects from scratch",
    lectures: 9,
    duration: "2hr 06min",
    items: [
      { title: "Planning your first project", duration: "10:22" },
      { title: "Build it together", duration: "18:45" },
      { title: "Improve and publish your work", duration: "15:08" },
    ],
  },
  {
    id: "next-steps",
    title: "Next steps and continued learning",
    lectures: 5,
    duration: "42min",
    items: [
      { title: "Putting your skills into practice", duration: "09:50" },
      { title: "Where to go from here", duration: "07:24" },
    ],
  },
];

const Course = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const courseId = new URLSearchParams(location.search).get("id");
  const courses = useSelector((state) => state.data.product);
  const shopData = useSelector((state) => state.shop.shopData);
  const wishlistData = useSelector((state) => state.wish.data);
  const isLogin = useSelector((state) => state.auth.isLogin);
  const course = courses.find((item) => String(item.id) === String(courseId));
  const [expandedSections, setExpandedSections] = useState({ welcome: true });
  const [previewState, setPreviewState] = useState("closed");

  const isInCart = Boolean(course && shopData.some((item) => item.id === course.id));
  const isWishlisted = Boolean(course && wishlistData.some((item) => item.id === course.id));

  const closePreview = useCallback(() => {
    setPreviewState((current) => (current === "open" ? "closing" : current));
    window.setTimeout(() => setPreviewState("closed"), 180);
  }, []);

  useEffect(() => {
    if (previewState === "closed") return undefined;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") closePreview();
    };
    document.body.classList.add("overflow-hidden");
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.classList.remove("overflow-hidden");
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [closePreview, previewState]);

  if (!course) {
    return (
      <main className="container max-w-[760px] px-5 py-20 text-center">
        <h1 className="font-SusseWorks text-3xl text-liColor">Course not found</h1>
        <p className="mt-3 text-disableColor">The course you requested is no longer available in this catalog.</p>
        <Link to="/search" className="inline-flex mt-6 bg-[#a435f0] px-5 py-3 font-bold text-white">
          Explore available courses
        </Link>
      </main>
    );
  }

  const toggleSection = (sectionId) => {
    setExpandedSections((current) => ({ ...current, [sectionId]: !current[sectionId] }));
  };

  const openPreview = () => setPreviewState("open");

  const addToCart = () => {
    if (isInCart) {
      navigate("/cart-shop");
      return;
    }
    dispatch(addProduct(course));
    toast.success("Course added to cart");
  };

  const buyNow = () => {
    if (!isInCart) dispatch(addProduct(course));
    navigate("/cart-shop");
  };

  const toggleWishlist = () => {
    if (!isLogin) {
      navigate("/login");
      return;
    }

    if (isWishlisted) {
      dispatch(removeWashList(course.id));
      toast.success("Removed from wishlist");
    } else {
      dispatch(addWashList(course));
      toast.success("Added to wishlist");
    }
  };

  const purchaseCard = (
    <div className="overflow-hidden bg-white lg:rounded-xl lg:border lg:border-border lg:shadow-[0_8px_24px_rgba(28,29,31,0.12)]">
      <button
        type="button"
        onClick={openPreview}
        className="group relative block w-full overflow-hidden bg-[#111827] text-left"
        aria-label={`Preview ${course["headTexts:"]}`}
      >
        <img className="aspect-video w-full object-cover opacity-60 transition duration-500 group-hover:scale-[1.03] group-hover:opacity-45" src={course.img} alt="" />
        <span className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/20" />
        <span className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-liColor shadow-lg transition duration-300 group-hover:scale-110 group-hover:bg-[#f7f9fa]">
            <BsPlayFill size={38} className="ml-1" />
          </span>
          <span className="mt-3 font-bold underline underline-offset-4">Preview this course</span>
        </span>
      </button>

      <div className="p-5">
        <div className="flex items-end gap-2">
          <span className="text-3xl font-bold text-liColor">${course.price}</span>
          <span className="mb-1 text-sm text-disableColor line-through">$129.99</span>
          <span className="mb-1 text-sm font-bold text-liColor">31% off</span>
        </div>
        <p className="mt-2 text-sm font-bold text-[#b32d0f]">12 hours left at this price!</p>

        <div className="mt-4 flex gap-2">
          <button type="button" onClick={addToCart} className="min-h-[48px] flex-1 bg-[#a435f0] px-3 font-bold text-white hover:bg-[#8710d8]">
            {isInCart ? "Go to cart" : "Add to cart"}
          </button>
          <button
            type="button"
            onClick={toggleWishlist}
            aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
            className={`flex h-12 w-12 items-center justify-center border border-liColor hover:bg-gray-secondary ${isWishlisted ? "text-[#a435f0]" : "text-liColor"}`}
          >
            <FiHeart size={22} fill={isWishlisted ? "currentColor" : "none"} />
          </button>
        </div>
        <button type="button" onClick={buyNow} className="mt-2 min-h-[48px] w-full border border-liColor px-3 font-bold text-liColor hover:bg-gray-secondary">
          Buy now
        </button>
        <p className="mt-3 text-center text-xs text-liColor">30-Day Money-Back Guarantee</p>

        <h2 className="mt-6 font-bold text-liColor">This course includes:</h2>
        <ul className="mt-3 space-y-3 text-sm text-liColor">
          <li className="flex gap-3"><BsCollectionPlay className="mt-0.5 shrink-0" /> 5.5 hours on-demand video</li>
          <li className="flex gap-3"><BsFileEarmarkText className="mt-0.5 shrink-0" /> 18 articles and 12 exercises</li>
          <li className="flex gap-3"><BsDownload className="mt-0.5 shrink-0" /> Downloadable resources</li>
          <li className="flex gap-3"><BsInfinity className="mt-0.5 shrink-0" /> Full lifetime access</li>
          <li className="flex gap-3"><BsPhone className="mt-0.5 shrink-0" /> Access on mobile and TV</li>
          <li className="flex gap-3"><BsTrophy className="mt-0.5 shrink-0" /> Certificate of completion</li>
        </ul>
        <div className="mt-6 flex items-center justify-between text-sm font-bold text-activeClr">
          <button type="button" className="hover:underline">Share</button>
          <button type="button" className="hover:underline">Gift this course</button>
          <button type="button" className="hover:underline">Apply Coupon</button>
        </div>
      </div>
    </div>
  );

  return (
    <main className="pb-16 text-liColor">
      <section className="bg-liColor text-white">
        <div className="mx-auto max-w-[1184px] px-5 py-7 sm:px-8 lg:pb-20">
          <nav className="mb-5 text-sm font-bold text-[#c0c4fc]" aria-label="Breadcrumb">
            Development <span className="px-1 text-white">›</span> {course.category.charAt(0).toUpperCase() + course.category.slice(1)}
          </nav>
          <h1 className="font-SusseWorks text-3xl leading-tight sm:text-4xl">{course["headTexts:"]}</h1>
          <p className="mt-4 text-lg leading-7 text-[#f7f9fa]">Learn by building practical projects, understanding the essentials, and following a clear route from first lesson to confident creator.</p>
          {course.bestseller && <span className="mt-4 inline-block bg-[#eceb98] px-2 py-1 text-xs font-bold text-[#3d3c0a]">Bestseller</span>}
          <div className="mt-3"><Star product={course} clr="!text-[#f3ca8c]" clr2="!text-white" /></div>
          <p className="mt-4 text-sm">Created by <button type="button" className="font-bold text-[#c0c4fc] underline">{course["user:"]}</button></p>
          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
            <span className="flex items-center gap-2"><BsPatchCheck /> Last updated 10/2026</span>
            <span className="flex items-center gap-2"><BsGlobe2 /> English</span>
            <span>English [Auto]</span>
          </div>
          <div className="mt-6 flex items-center gap-5 text-sm font-bold lg:hidden">
            <button type="button" onClick={openPreview} className="flex items-center gap-2 text-[#c0c4fc] underline"><BsPlayCircleFill /> Preview</button>
            <button type="button" className="flex items-center gap-2 text-[#c0c4fc] underline"><FiShare2 /> Share</button>
            <button type="button" className="flex items-center gap-2 text-[#c0c4fc] underline"><FiGift /> Gift</button>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:grid lg:grid-cols-[minmax(0,760px)_340px] lg:gap-x-8">
        <div>
        <div className="-mx-5 mt-0 sm:-mx-8 lg:hidden">{purchaseCard}</div>

        <section className="-mx-5 mt-8 border-0 p-0 sm:mx-0 sm:border sm:border-border sm:p-6">
          <h2 className="text-2xl font-bold">What you&apos;ll learn</h2>
          <div className="mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {learningObjectives.map((objective) => (
              <p key={objective} className="flex gap-3 text-sm leading-5"><BsCheck2 size={20} className="shrink-0" /> {objective}</p>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">Course content</h2>
          <div className="mt-4 flex flex-wrap justify-between gap-3 text-sm">
            <span>4 sections • 25 lectures • 4h 34m total length</span>
            <button
              type="button"
              className="font-bold text-activeClr hover:underline"
              onClick={() => setExpandedSections(Object.fromEntries(curriculumData.map((section) => [section.id, true])))}
            >
              Expand all sections
            </button>
          </div>
          <div className="mt-4 border border-border">
            {curriculumData.map((section) => (
              <div key={section.id} className="border-b border-border last:border-0">
                <button type="button" onClick={() => toggleSection(section.id)} className="flex w-full items-center gap-3 bg-gray-secondary px-4 py-4 text-left hover:bg-[#eef0f2]">
                  {expandedSections[section.id] ? <BsChevronUp className="shrink-0" /> : <BsChevronDown className="shrink-0" />}
                  <span className="flex-1 font-bold">{section.title}</span>
                  <span className="hidden text-sm sm:block">{section.lectures} lectures • {section.duration}</span>
                </button>
                {expandedSections[section.id] && (
                  <ul className="bg-white px-4 py-2">
                    {section.items.map((lesson) => (
                      <li key={lesson.title} className="flex items-center gap-3 py-3 text-sm">
                        <AiOutlinePlayCircle className="shrink-0" />
                        <span className="flex-1">{lesson.title}</span>
                        {lesson.preview && <button type="button" onClick={openPreview} className="mr-2 font-bold text-activeClr underline">Preview</button>}
                        <span className="flex items-center gap-1 text-disableColor"><BsClock /> {lesson.duration}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">Requirements</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6">
            <li>No prior experience is required; you&apos;ll start with the fundamentals.</li>
            <li>A computer with an internet connection and the willingness to practice.</li>
            <li>Curiosity and a desire to build things as you learn.</li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">Description</h2>
          <div className="mt-4 space-y-4 text-sm leading-6">
            <p>{course["headTexts:"]} is a hands-on course designed to make the important ideas feel approachable and useful. Every lesson builds toward real work you can understand, adapt, and confidently make your own.</p>
            <p>Rather than just watching explanations, you&apos;ll work through focused examples, make practical decisions, and learn the patterns that help you keep progressing after the course ends.</p>
          </div>
        </section>

        <section className="mt-10 border-t border-border pt-8">
          <p className="font-bold text-activeClr">Instructor</p>
          <h2 className="mt-1 text-2xl font-bold text-activeClr underline">{course["user:"]}</h2>
          <p className="mt-1 text-disableColor">Professional instructor and course creator</p>
          <div className="mt-4 flex gap-5 text-sm">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-gray-secondary text-2xl font-bold text-activeClr">{course["user:"].slice(0, 1)}</div>
            <ul className="space-y-1">
              <li>★ {course.rating} instructor rating</li>
              <li>◉ {course.peopleNumber} reviews</li>
              <li>▶ 12 courses</li>
            </ul>
          </div>
        </section>
        </div>
        <aside className="mt-[33px] hidden self-start lg:sticky lg:top-20 lg:block">
          {purchaseCard}
        </aside>
      </div>

      {previewState !== "closed" && (
        <div
          className={`ui-modal-backdrop fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 ${
            previewState === "closing" ? "ui-modal-backdrop-closing" : ""
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Course preview"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closePreview();
          }}
        >
          <div className={`ui-modal-panel w-full max-w-5xl overflow-hidden bg-[#101114] shadow-2xl ${previewState === "closing" ? "ui-modal-panel-closing" : ""}`}>
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 text-white sm:px-5">
              <div className="min-w-0">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#c0c4fc]">Free preview</p>
                <p className="truncate pt-0.5 font-bold">{course["headTexts:"]}</p>
              </div>
              <button type="button" onClick={closePreview} aria-label="Close preview" className="ml-4 rounded-full p-2 text-white transition hover:bg-white/10"><BsX size={24} /></button>
            </div>
            <div className="relative aspect-video bg-black">
              <img src={course.img} alt="Course preview" className="h-full w-full object-cover opacity-50" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
              <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
                <span className="mb-4 rounded-full border border-white/30 bg-black/30 px-3 py-1 text-xs font-bold backdrop-blur">Preview lecture · 04:32</span>
                <button type="button" onClick={() => toast.error("Preview playback is unavailable in this demo.")} className="group flex h-20 w-20 items-center justify-center rounded-full bg-white text-liColor shadow-xl transition duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-[#c0c4fc]"><BsPlayFill size={46} className="ml-1 transition-transform group-hover:translate-x-0.5" /></button>
                <p className="mt-5 max-w-xl text-lg font-bold sm:text-2xl">Welcome to the course</p>
                <p className="mt-2 max-w-lg text-sm text-[#f7f9fa]">Watch this free lesson to see the course structure and teaching style before enrolling.</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-3 bg-[#18191c] px-4 py-4 text-white sm:px-5">
              <button type="button" onClick={() => toast.error("Preview playback is unavailable in this demo.")} aria-label="Play preview" className="rounded-full p-1 hover:bg-white/10"><BsPlayFill size={24} /></button>
              <div className="h-1.5 min-w-[120px] flex-1 overflow-hidden rounded-full bg-white/20"><div className="h-full w-[18%] rounded-full bg-[#a435f0]" /></div>
              <span className="text-xs text-white/75">00:48 / 04:32</span>
              <button type="button" onClick={closePreview} className="ml-auto border border-white/40 px-3 py-2 text-sm font-bold transition hover:bg-white hover:text-liColor">Close preview</button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Course;
