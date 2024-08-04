import { Nunito, Rubik } from "next/font/google";

export const rubik = Rubik({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700', '800', '900'],
    variable: '--font-rubik'
})

export const nunito = Nunito({
    subsets: ['latin'],
    weight: ['300', '700', "800", '900'],
    variable: '--font-nunito'
})