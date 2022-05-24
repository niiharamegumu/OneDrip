import { ScaleFade } from '@chakra-ui/react'

const Logo: React.FC = () => {
  return (
    // @ts-ignore no problem in operation, although type error appears
    <ScaleFade initialScale={0} in>
      <svg
        width="291"
        height="67"
        viewBox="0 0 291 67"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24.6172 53.4014C17.4167 53.4014 11.9137 51.4417 8.1084 47.5225C3.00423 42.7145 0.452148 35.7874 0.452148 26.7412C0.452148 17.5127 3.00423 10.5856 8.1084 5.95996C11.9137 2.04069 17.4167 0.0810547 24.6172 0.0810547C31.8177 0.0810547 37.3206 2.04069 41.126 5.95996C46.2074 10.5856 48.748 17.5127 48.748 26.7412C48.748 35.7874 46.2074 42.7145 41.126 47.5225C37.3206 51.4417 31.8177 53.4014 24.6172 53.4014ZM34.5635 39.8662C37.0016 36.79 38.2207 32.415 38.2207 26.7412C38.2207 21.0902 36.9902 16.7266 34.5293 13.6504C32.0911 10.5514 28.7871 9.00195 24.6172 9.00195C20.4473 9.00195 17.1204 10.54 14.6367 13.6162C12.153 16.6924 10.9111 21.0674 10.9111 26.7412C10.9111 32.415 12.153 36.79 14.6367 39.8662C17.1204 42.9424 20.4473 44.4805 24.6172 44.4805C28.7871 44.4805 32.1025 42.9424 34.5635 39.8662Z"
          fill="#020826"
        />
        <path
          d="M73.5625 21.9561C70.2585 21.9561 67.9912 23.3574 66.7607 26.1602C66.1227 27.6413 65.8037 29.5326 65.8037 31.834V52H56.0967V14.8125H65.4961V20.2471C66.7493 18.333 67.9342 16.9544 69.0508 16.1113C71.056 14.6074 73.5967 13.8555 76.6729 13.8555C80.5238 13.8555 83.6683 14.8695 86.1064 16.8975C88.5674 18.9027 89.7979 22.2409 89.7979 26.9121V52H79.8174V29.3389C79.8174 27.3792 79.5553 25.8753 79.0312 24.8271C78.0742 22.9131 76.2513 21.9561 73.5625 21.9561Z"
          fill="#020826"
        />
        <path
          d="M130.711 41.0625C130.46 43.2728 129.31 45.5173 127.259 47.7959C124.069 51.4189 119.603 53.2305 113.86 53.2305C109.121 53.2305 104.939 51.7038 101.316 48.6504C97.6934 45.597 95.8818 40.6296 95.8818 33.748C95.8818 27.2995 97.5111 22.3548 100.77 18.9141C104.051 15.4733 108.3 13.7529 113.519 13.7529C116.618 13.7529 119.409 14.334 121.893 15.4961C124.376 16.6582 126.427 18.4925 128.045 20.999C129.503 23.2093 130.449 25.7728 130.882 28.6895C131.132 30.3984 131.235 32.8594 131.189 36.0723H105.691C105.828 39.8092 107.002 42.4297 109.212 43.9336C110.556 44.8678 112.174 45.335 114.065 45.335C116.071 45.335 117.7 44.7653 118.953 43.626C119.637 43.0107 120.241 42.1562 120.765 41.0625H130.711ZM121.072 29.6465C120.913 27.0716 120.127 25.1234 118.714 23.8018C117.324 22.4574 115.592 21.7852 113.519 21.7852C111.263 21.7852 109.508 22.4915 108.255 23.9043C107.024 25.3171 106.25 27.2311 105.931 29.6465H121.072Z"
          fill="#020826"
        />
        <path
          d="M179.759 52H158.055V1.61914H179.759C182.881 1.66471 185.478 2.0293 187.552 2.71289C191.084 3.875 193.943 6.00553 196.131 9.10449C197.885 11.611 199.082 14.3226 199.72 17.2393C200.358 20.1559 200.677 22.9359 200.677 25.5791C200.677 32.2783 199.332 37.9521 196.644 42.6006C192.998 48.8669 187.369 52 179.759 52ZM187.586 14.4707C185.968 11.7363 182.767 10.3691 177.981 10.3691H168.274V43.25H177.981C182.949 43.25 186.412 40.8005 188.372 35.9014C189.443 33.2126 189.979 30.0111 189.979 26.2969C189.979 21.1699 189.181 17.2279 187.586 14.4707Z"
          fill="#020826"
        />
        <path
          d="M226.585 23.7334C222.666 23.7334 220.034 25.0094 218.689 27.5615C217.938 28.9971 217.562 31.2074 217.562 34.1924V52H207.752V14.7441H217.049V21.2383C218.553 18.7546 219.863 17.057 220.979 16.1455C222.802 14.6188 225.172 13.8555 228.089 13.8555C228.271 13.8555 228.419 13.8669 228.533 13.8896C228.67 13.8896 228.955 13.901 229.388 13.9238V23.9043C228.772 23.8359 228.226 23.7904 227.747 23.7676C227.269 23.7448 226.881 23.7334 226.585 23.7334Z"
          fill="#020826"
        />
        <path
          d="M245.145 14.7441V52H235.267V14.7441H245.145ZM245.145 1.31152V10.3008H235.267V1.31152H245.145Z"
          fill="#020826"
        />
        <path
          d="M285.818 18.7432C288.826 21.9561 290.33 26.6729 290.33 32.8936C290.33 39.4561 288.849 44.4577 285.887 47.8984C282.947 51.3392 279.153 53.0596 274.505 53.0596C271.543 53.0596 269.082 52.319 267.122 50.8379C266.051 50.0176 265.003 48.8213 263.978 47.249V66.6631H254.339V14.7441H263.67V20.2471C264.718 18.6292 265.835 17.3532 267.02 16.4189C269.184 14.7555 271.759 13.9238 274.744 13.9238C279.096 13.9238 282.788 15.5303 285.818 18.7432ZM280.281 33.3721C280.281 30.501 279.62 27.9603 278.299 25.75C277 23.5397 274.881 22.4346 271.941 22.4346C268.41 22.4346 265.983 24.1094 264.661 27.459C263.978 29.2363 263.636 31.4922 263.636 34.2266C263.636 38.556 264.786 41.598 267.088 43.3525C268.455 44.3779 270.073 44.8906 271.941 44.8906C274.653 44.8906 276.715 43.8424 278.128 41.7461C279.563 39.6497 280.281 36.8584 280.281 33.3721Z"
          fill="#020826"
        />
      </svg>
    </ScaleFade>
  )
}

export default Logo