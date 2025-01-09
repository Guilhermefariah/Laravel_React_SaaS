import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, usePage } from "@inertiajs/react";

export const Feature = ({ feature, answer, children }) => {
    const { auth } = usePage().props;

    const availableCredits = auth.user.availableCredits;
    return (
        <div>#</div>
    )
}