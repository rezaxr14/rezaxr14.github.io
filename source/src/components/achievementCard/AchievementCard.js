import React from "react";
import "./AchievementCard.scss";

function Badge({badge}) {
  return (
    <div className={"achievement-badge badge-" + (badge.tone || "indigo")}>
      {badge.icon && <i className={badge.icon + " badge-icon"}></i>}
      {badge.value && (
        <div className="badge-values">
          <div className="badge-stat">
            <span className="badge-value">{badge.value}</span>
            <span className="badge-label">{badge.label}</span>
          </div>
          {badge.value2 && (
            <>
              <span className="badge-divider"></span>
              <div className="badge-stat">
                <span className="badge-value">{badge.value2}</span>
                <span className="badge-label">{badge.label2}</span>
              </div>
            </>
          )}
        </div>
      )}
      {!badge.value && <span className="badge-label">{badge.label}</span>}
    </div>
  );
}

export default function AchievementCard({cardInfo, isDark}) {
  return (
    <div className={isDark ? "dark-mode certificate-card" : "certificate-card"}>
      <div
        className={
          cardInfo.badge
            ? "certificate-image-div certificate-badge-div"
            : "certificate-image-div"
        }
      >
        {cardInfo.badge ? (
          <Badge badge={cardInfo.badge} />
        ) : (
          <img
            src={cardInfo.image}
            alt={cardInfo.imageAlt || "Card Thumbnail"}
            className="card-image"
          ></img>
        )}
      </div>
      <div className="certificate-detail-div">
        <h5 className={isDark ? "dark-mode card-title" : "card-title"}>
          {cardInfo.title}
        </h5>
        {cardInfo.titleFa && (
          <p className="card-title-fa" lang="fa" dir="rtl">
            {cardInfo.titleFa}
          </p>
        )}
        <p className={isDark ? "dark-mode card-subtitle" : "card-subtitle"}>
          {cardInfo.description}
        </p>
      </div>
      <div className="certificate-card-footer">
        {cardInfo.footer.map((v, i) => (
          <a
            key={i}
            className={isDark ? "dark-mode certificate-tag" : "certificate-tag"}
            href={v.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {v.name}
          </a>
        ))}
      </div>
    </div>
  );
}
