<header class="relative z-50 bg-white font-sans tracking-wide shadow-md">
    <section
        class="relative flex flex-wrap items-center gap-5 border-b border-gray-200 px-4 py-3 max-lg:min-h-[60px] sm:px-10 lg:min-h-[80px] lg:justify-center"
    >
        <a href="javascript:void(0)">
            {{--
                <img
                src="https://readymadeui.com/readymadeui.svg"
                alt="logo"
                class="w-32 md:w-[170px]"
                />
            --}}
            Daily Talim
        </a>

        <div
            class="flex items-center space-x-4 max-md:ml-auto md:absolute md:right-10"
        >
            <div
                class="flex h-7 w-7 items-center justify-center rounded-md text-gray-800 transition-all hover:bg-blue-600 hover:text-white"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 cursor-pointer fill-current transition-all"
                    viewBox="0 0 155.139 155.139"
                >
                    <path
                        d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z"
                        data-original="#010002"
                    />
                </svg>
            </div>
        </div>
    </section>

    <div class="flex flex-wrap overflow-x-auto px-10 py-3.5">
        <div
            id="collapseMenu"
            class="w-full max-lg:hidden max-lg:before:fixed max-lg:before:inset-0 max-lg:before:z-50 max-lg:before:bg-black max-lg:before:opacity-50 lg:!block"
        >
            <button
                id="toggleClose"
                class="fixed right-4 top-2 z-[100] flex h-9 w-9 items-center justify-center rounded-full border bg-white lg:hidden"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-3.5 w-3.5 fill-black"
                    viewBox="0 0 320.591 320.591"
                >
                    <path
                        d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                        data-original="#000000"
                    ></path>
                    <path
                        d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                        data-original="#000000"
                    ></path>
                </svg>
            </button>

            <ul
                class="z-50 max-lg:fixed max-lg:left-0 max-lg:top-0 max-lg:h-full max-lg:w-1/2 max-lg:min-w-[300px] max-lg:space-y-3 max-lg:overflow-auto max-lg:bg-white max-lg:p-6 max-lg:shadow-md lg:flex lg:justify-center lg:gap-x-10"
            >
                <li class="mb-6 hidden max-lg:block">
                    <a href="javascript:void(0)">
                        {{--
                            <img
                            src="https://readymadeui.com/readymadeui.svg"
                            alt="logo"
                            class="w-36"
                            />
                        --}}
                        Daily Talim
                    </a>
                </li>
                <li class="max-lg:border-b max-lg:py-3">
                    <a
                        href="/"
                        class="block text-[15px] font-bold text-[#007bff] hover:text-[#007bff]"
                    >
                        Home
                    </a>
                </li>
                <li class="max-lg:border-b max-lg:py-3">
                    <a
                        href="/about"
                        class="block text-[15px] font-bold text-gray-500 hover:text-[#007bff]"
                    >
                        About
                    </a>
                </li>
                <li class="max-lg:border-b max-lg:py-3">
                    <a
                        href="/blog"
                        class="block text-[15px] font-bold text-gray-500 hover:text-[#007bff]"
                    >
                        Blog
                    </a>
                </li>
            </ul>
        </div>

        <div class="ml-auto flex lg:hidden">
            <button id="toggleOpen">
                <svg
                    class="h-7 w-7"
                    fill="#000"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clip-rule="evenodd"
                    ></path>
                </svg>
            </button>
        </div>
    </div>
</header>

<script>
    var toggleOpen = document.getElementById('toggleOpen')
    var toggleClose = document.getElementById('toggleClose')
    var collapseMenu = document.getElementById('collapseMenu')

    function handleClick() {
        if (collapseMenu.style.display === 'block') {
            collapseMenu.style.display = 'none'
        } else {
            collapseMenu.style.display = 'block'
        }
    }

    toggleOpen.addEventListener('click', handleClick)
    toggleClose.addEventListener('click', handleClick)
</script>
