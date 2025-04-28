import { ADLaM_Display, Alata } from "next/font/google"
import localFont from "next/font/local"

export const ADLaM = ADLaM_Display({
    weight: "400",
    subsets: ["adlam"]
})

export const AlataNormal = Alata({
    weight: "400",
    // subsets: ["adlam"]
})

export const BossBaby = localFont({
    src: './BossBaby.otf',
})