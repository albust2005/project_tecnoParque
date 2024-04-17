import { useState } from "react"
import { useLibrosContext } from "../../components/providers/librosProvider"

export function Estadisticas() {

    const { libros } = useLibrosContext()

    return (
        <section>
            <div>
                {
                    libros?.map(libro => (
                        <div>
                            
                        </div>
                    ))
                }
            </div>
        </section>
    )
}