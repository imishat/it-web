function MainLayout({ children, title, description }) {
  return (
    <div>
      <head>
        <title>{title}</title>
        <meta property="og:title" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta name="author" content="Admin" />
        <meta name="author" content="Admin" />
        <meta name="generator" content="Admin" />
        <meta name="keywords" content={description} />
        <meta name="referrer" content="origin-when-cross-origin" />
        <meta name="color-scheme" content="light" />
        <meta name="creator" content="Admin" />
        <meta name="publisher" content="Admin" />
        <meta
          name="format-detection"
          content="telephone=no, address=no, email=no"
        />
      </head>
      {children}
    </div>
  );
}

export default MainLayout;
