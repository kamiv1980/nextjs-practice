'use client' // Error boundaries must be Client Components

import {Button} from "@/components/ui/button";

export default function Error({
                                  error,
                                  reset,
                              }: {
    error: Error & { digest?: string }
    reset: () => void
}) {

    return (
        <div className="text-center p-12">
            <h2>{error.message}</h2>
            <Button
                type="button"
                onClick={() => reset()}
                className="mt-8 bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
                Try again
            </Button>
        </div>
    )
}
