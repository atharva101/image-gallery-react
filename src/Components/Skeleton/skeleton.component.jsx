import './skeleton.styles.css'
import Skeleton from "@mui/material/Skeleton";


export default function SkeletonCard() {

    return(
        <div className="skeleton-container">

            {[1,2,3,4,5,6,7,8].map(el => {
                return (
                  <div className="skeleton-item">
                    <Skeleton
                      variant="rectangular"
                      width={280}
                      height={300}
                      animation="wave"
                    />
                  </div>
                );
          })}
        </div>
    )
}