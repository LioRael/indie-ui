import { cn } from "@/src/utils/cn"

const cardContent = {
  title: "Lorem ipsum dolor",
  description:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, hic ipsum! Qui dicta debitis aliquid quo molestias explicabo iure!",
}
const CardBody = ({ className = "p-4" }) => (
  <div className={cn(className)}>
    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
      {cardContent.title}
    </h3>
    <p className="mt-2 text-gray-700 dark:text-gray-300">
      {cardContent.description}
    </p>
  </div>
)
//======================================
export const SimpleCard_V1 = () => {
  const Ellipses = () => {
    const sharedClasses =
      "rounded-full outline outline-8 dark:outline-gray-950 sm:my-6 md:my-8 size-1 my-4 outline-gray-50 bg-green-400"
    return (
      <div className="absolute z-0 grid h-full w-full items-center gap-8 lg:grid-cols-2">
        <section className="absolute z-0 grid h-full w-full grid-cols-2 place-content-between">
          <div className={`${sharedClasses} -mx-[2.5px]`}></div>
          <div className={`${sharedClasses} -mx-[2px] place-self-end`}></div>
          <div className={`${sharedClasses} -mx-[2.5px]`}></div>
          <div className={`${sharedClasses} -mx-[2px] place-self-end`}></div>
        </section>
      </div>
    )
  }
  const Container = ({ children }: { children: React.ReactNode }) => (
    <div className="relative mx-auto w-full rounded-lg border border-dashed border-zinc-300 px-4 dark:border-zinc-800 sm:px-6 md:px-8">
      <div className="absolute left-0 top-4 -z-0 h-px w-full bg-zinc-400 dark:bg-zinc-700 sm:top-6 md:top-8"></div>
      <div className="absolute bottom-4 left-0 z-0 h-px w-full bg-zinc-400 dark:bg-zinc-700 sm:bottom-6 md:bottom-8"></div>
      <div className="relative w-full border-x border-zinc-400 dark:border-zinc-700">
        <Ellipses />
        <div className="relative z-20 mx-auto py-8">{children}</div>
      </div>
    </div>
  )
  return (
    <div className="mx-auto w-fit max-w-lg">
      <Container>
        <div className="p-3 w-full center">
          <CardBody />
        </div>
      </Container>
    </div>
  )
}
//======================================
export const SimpleCard_V2 = () => {
  const Container = ({ children }: { children: React.ReactNode }) => (
    <div className="relative mx-auto w-full px-4 sm:px-6 md:px-8">
      <div className="absolute left-0 top-4 -z-0 h-px w-full bg-zinc-300 dark:bg-zinc-800 sm:top-6 md:top-8"></div>
      <div className="absolute bottom-4 left-0 z-0 h-px w-full bg-zinc-300 dark:bg-zinc-800 sm:bottom-6 md:bottom-8"></div>
      <div className="relative w-full border-x border-zinc-300 dark:border-zinc-800">
        <div className="relative z-20 mx-auto py-8">{children}</div>
      </div>
    </div>
  )
  return (
    <div className="mx-auto max-w-lg py-4">
      <Container>
        <div className="p-4 w-full center">
          <CardBody />
        </div>
      </Container>
    </div>
  )
}

//======================================
export const SimpleCard_V3 = () => {
  const Icon = ({ className, ...rest }: any) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        width={24}
        height={24}
        strokeWidth="1"
        stroke="currentColor"
        className={cn("dark:text-white text-black size-6 absolute", className)}
        {...rest}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
      </svg>
    )
  }
  return (
    <div className="max-w-lg mx-auto py-4">
      <div className="border border-dashed border-zinc-400 dark:border-zinc-700 relative">
        <Icon className="-top-3 -left-3" />
        <Icon className="-top-3 -right-3" />
        <Icon className="-bottom-3 -left-3" />
        <Icon className="-bottom-3 -right-3" />
        <CardBody className="p-6" />
      </div>
    </div>
  )
}
//======================================Neubrutalism
export const SimpleCard_V4 = () => {
  return (
    <div className="max-w-lg mx-auto py-4">
      <div className="border-[0.5px] border-zinc-400 dark:border-white/70 relative shadow-[4px_4px_0px_0px_rgba(0,0,0)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.7)]">
        <CardBody className="p-6" />
      </div>
    </div>
  )
}

//======================================
export const SimpleCard_V5 = () => {
  return (
    <div className="max-w-lg mx-auto pt-4">
      {/* inner card */}
      <div className="border-[0.5px] border-zinc-300 rounded-sm p-2 dark:border-zinc-800">
        <div
          className={cn(
            "border rounded-sm bg-gradient-to-br",
            // light mode
            " from-white to-zinc-200/60 border-zinc-300 shadow-[2px_0_8px_rgba(0,_0,_0,_0.15)]",
            // dark mode
            "dark:from-zinc-950 dark:to-zinc-900/60 dark:border-zinc-900/50 dark:shadow-inner"
          )}
        >
          <CardBody />
        </div>
      </div>
    </div>
  )
}
