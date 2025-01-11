import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import PackagePricingCards from "@/Components/PackagePricingCards";

export const Index = ({ auth, packages, features, success, error }) => {

    const availableCredits = auth.user.available_credits;

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Credit
                </h2>
            }
        >
            <Head title="Credit" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {success && (
                        <div className="mb-3 p-3 px-5 rounded text-white bg-emerald-500 text-xl">
                            {success}
                        </div>
                    )}
                    {error && (
                        <div className="mb-3 p-3 px-5 rounded text-white bg-red-500 text-xl">
                            {error}
                        </div>
                    )}
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg relative">
                        <div className="flex flex-col gap-3 items-center">
                            <img
                                src="/assets/img/coin.png"
                                alt=""
                                className="w-[100px]"
                            />
                            <h3 className="text-white text-2xl">
                                You have {availableCredits} credits
                            </h3>
                        </div>
                    </div>
                    <PackagePricingCards packages={packages.data} features={features.data} />
                </div>
            </div>
        </AuthenticatedLayout>
    );
};
