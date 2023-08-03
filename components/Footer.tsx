export default function Footer() {
  return (
    <div className="mt-28 border-t border-neutral-100">
      <div className="container mx-auto grid auto-cols-max grid-flow-col gap-x-8 px-4 py-8">
        <div>
          <p className="font-light">&copy; Vincent Desdoigts</p>
        </div>
        <div>
          <p className="font-light">
            <a
              href="https://twitter.com/vdesdoigts"
              target="_blank"
              className="transition-color duration-700 hover:text-primary-500"
            >
              Twitter @vdesdoigts
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
