import { Capsule } from '@models';

export type CapsulesGetResponse = Capsule[];

export const getCapsules = async (): Promise<CapsulesGetResponse> => {
  try {
    const requestOptions = {
      method: "GET",
    };

    const data: CapsulesGetResponse = await fetch(
      "https://api.spacexdata.com/v3/capsules",
      requestOptions
    ).then((res) => res.json());
    return data;
  } catch (error) {
    throw new Error("Error while fetching Capsules");
  }
};
