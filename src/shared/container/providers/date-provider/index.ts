import { container } from "tsyringe";

import { IDateProvider } from "./i-date-provider";
import { DayjsDateProvider } from "./implementations/dayjs-date-provider";


container.registerSingleton<IDateProvider>(
    "DayjsDateProvider",
    DayjsDateProvider
);