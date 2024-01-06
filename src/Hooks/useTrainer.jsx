import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSec from "./useAxiosSec";



const useTrainer = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSec();

    const {data: isTrainer} = useQuery({
        queryKey: [user?.email, 'isTrainer'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/trainer/${user.email}`);
            console.log(res.data);
            return res?.data?.trainer;
        },
    })
    return [isTrainer]
};

export default useTrainer;


